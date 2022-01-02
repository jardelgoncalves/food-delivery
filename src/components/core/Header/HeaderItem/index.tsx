import * as Styles from './HeaderItem.styles';

type HeaderItemProps = {
  text: string;
  path: string;
  isActive?: boolean;
};

export function HeaderItem({ text, isActive, path }: HeaderItemProps) {
  return (
    <Styles.Container isActive={!!isActive} href={path}>
      {text}
    </Styles.Container>
  );
}
