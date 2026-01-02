type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  console.log("header");
  console.log("CI Testing");
  return <h1>{title}</h1>;
}
