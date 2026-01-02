type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  console.log("header");
  return <h1>{title}</h1>;
}
