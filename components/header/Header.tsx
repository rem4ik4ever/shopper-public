import Link from 'src/Link';
import { Logo2 } from 'src/public/Logo';

export const Header = () => {
  return (
    <header className="bg-accent1 sticky top-0 p-3 flex justify-between items-center text-lg">
      <Link href="/" passHref>
        <div className="flex text-white items-center">
          <Logo2 size="30" />
          <span className="text-xl ml-1">Shopper</span>
        </div>
      </Link>
    </header>
  );
};
