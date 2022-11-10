// Component
interface ValidationComponent {
  validate: (value: unknown) => boolean;

  add?: (validator: ValidationComponent[]) => void;
}

// Leaf
export class ValidateEmail implements ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return value.includes("@");
  }
}

export class ValidateString implements ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string";
  }
}

export class ValidateNumber implements ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "number";
  }
}

// Composite
export class ComposedValidation implements ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  add(validators: ValidationComponent[]): void {
    for (const v of validators) this.children.push(v);
  }

  validate(value: unknown): boolean {
    for (const c of this.children) {
      const isValid = c.validate(value);

      if (!isValid) return false;
    }

    return true;
  }
}

const composedValidation = new ComposedValidation();

composedValidation.add([
  new ValidateEmail(),
  new ValidateString(),
  new ValidateNumber(),
]);
