import React, { ReactElement, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.css';

const ZERO_POSITION = 0;
const ONE_STEP = 1;
const EMPTY_LINE = 0;

interface CrumbPart {
  text: string;
  href: string;
}

interface AliasPart {
  text: string;
  href?: string;
}

interface CrumbProps {
  text: string;
  href: string;
  last: boolean;
}

type Alias = Record<string, AliasPart>;

const aliases: Alias = {
  product: { text: 'Catalog', href: '/catalog' },
};

function getPathAlias(path: string, href: string): CrumbPart {
  const alias = aliases[path];
  if (!alias) {
    return {
      text: path,
      href,
    };
  }
  return {
    text: alias.text,
    href: alias.href ?? href,
  };
}

function Crumb({ text, href, last = false }: CrumbProps): ReactElement {
  if (last) {
    return <span />;
  }

  return (
    <>
      <Link className={styles.link} href={href}>
        {text}
      </Link>
      <span className={styles.separator}>/</span>
    </>
  );
}

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs = ({ className }: BreadcrumbsProps): ReactElement => {
  const router = useRouter();
  const breadcrumbs = useMemo((): CrumbPart[] => {
    const [asPathWithoutQuery] = router.asPath.split('?');
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((part) => part.length > EMPTY_LINE);

    const crumblist: CrumbPart[] = asPathNestedRoutes.map((subpath, index) => {
      const href = `/${asPathNestedRoutes
        .slice(ZERO_POSITION, index + ONE_STEP)
        .join('/')}`;
      return getPathAlias(subpath, href);
    });

    return [{ href: '/', text: 'Home' }, ...crumblist];
  }, [router.asPath]);

  return (
    <div className={className}>
      {breadcrumbs.map((crumb, index) => {
        const key = `crumb${index}key`;
        const last = index === breadcrumbs.length - ONE_STEP;
        return <Crumb {...crumb} key={key} last={last} />;
      })}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  className: '',
};

export default Breadcrumbs;
