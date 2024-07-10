interface TextProps {
  text: string;
}
export const Text = ({ text }: TextProps) => {
  return (
    <text x="50%" y="50%" dominant-baseline="middle" fill="black" text-anchor="middle">
      {text}
    </text>
  );
};
