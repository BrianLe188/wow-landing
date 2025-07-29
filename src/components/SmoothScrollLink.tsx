import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useCallback,
  MouseEvent,
} from "react";

const SmoothScrollLink = ({
  href,
  children,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (href?.startsWith("#")) {
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [href],
  );

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
