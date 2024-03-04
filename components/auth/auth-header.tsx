interface HeaderProps {
  label: string;
}

export const AuthHeader = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 ">
      <h1 className="text-3xl font-semibold">🔐BuildStore Auth</h1>
      <p className="text-muted-foreground  text-sm">{label}</p>
    </div>
  );
};
