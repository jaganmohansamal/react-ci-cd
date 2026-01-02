type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  console.log("headers");
  return <h1>{title}</h1>;
}
