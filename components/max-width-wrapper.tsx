interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return <div className="container">{children}</div>;
};

export default MaxWidthWrapper;
