import type React from "react";

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export type FooterProps = {
  children?: React.ReactNode;
  className?: string;
};

export type NavBarProps = {
  children?: React.ReactNode;
  className?: string;
};

// MAIN LAVES SOM CONTAINER - ØVRIGE NYE CONTAINERS TILFØJES I LISTEN CONTAINERTAG
export type ContainerTag =
  | "div"
  | "section"
  | "fieldset"
  | "figure"
  | "main"
  | "article";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  innerHTML?: ContainerTag;
  color?: string;
};
// ******  //
export type UlProps = {
  children?: React.ReactNode;
  className?: string;
};

export type OlProps = {
  children?: React.ReactNode;
  className?: string;
};

export type LiProps = {
  children?: React.ReactNode;
  className?: string;
};

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type FieldProps = InputProps & {
  id: string;
  label: string;
};

export type GoalProps = {
  id: number;
  title: string;
  color: string;
  icon: string;
};

export type GoalCardProps = GoalProps & {
  className?: string;
  children?: React.ReactNode;
};

export type NavLinkItemProps = {
  to: string;
  label: string;
};

export type EducationCardProps = {
  id: number;
  name: string;
  color: string;
};

export type EducationListProps = {
  children?: React.ReactNode;
};

export type EducationPropsResponse = EducationCardProps[];

export type ContentWrapperProps = {
  children?: React.ReactNode;
  pagetitle: string;
};

export type ThemeProps = {
  children?: React.ReactNode;
  title: string;
  id: number;
};

type FAQProps = {
  id: number;
  title: string;
  children: React.ReactNode;
  context: string;
};

export type FAQResponseProps = FAQProps[];

type GoalListProps = {
  id: number;
  title: string;
  byline?: string;
  color: string;
  icon: string;
};

export type GoalListResponse = GoalListProps[];

export type ThemeContextProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  textValue?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
};
