import type { FieldProps } from "../../types/types";
import { Label, Input } from "./Form";
import { FieldWrapper } from "./Field.styled";


export const Field = ({ id, label, className, ...input }: FieldProps) => (
  <FieldWrapper className={className}>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} name={id} {...input} />
  </FieldWrapper>
);
