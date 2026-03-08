import { Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cx from "clsx";
import NextImage from "next/image";
import Link from "next/link";
import LogoDark from "../../../../public/logo-dark.svg";
import LogoLight from "../../../../public/logo-light.svg";
import RestorFXDark from "../../../../public/restorfx-dark.svg";
import RestorFXLight from "../../../../public/restorfx-light.svg";
import classes from "./Company.module.css";

export function LogoCompany({ prismsize, restorfxsize }) {
  const isMobile = useMediaQuery("(max-width: 576px)");

  const prismHeight = isMobile ? 60 : prismsize || 80;
  const restorHeight = isMobile ? 10 : restorfxsize || 12;
  return (
    <Group component={Link} href="/">
      <Group>
        <Image
          component={NextImage}
          src={LogoLight}
          alt="Prism Auto Logo"
          className={cx(classes.light)}
          height={prismHeight}
          width={prismHeight}
          loading="eager"
        />
        <Image
          component={NextImage}
          src={LogoDark}
          alt="Prism Auto Logo"
          className={cx(classes.dark)}
          height={prismHeight}
          width={prismHeight}
          loading="eager"
        />
      </Group>
      <div className={classes.divider} />
      <Group>
        <Image
          component={NextImage}
          src={RestorFXLight}
          alt="RestorFX Logo"
          className={cx(classes.light)}
          height={restorHeight}
          loading="eager"
        />
        <Image
          component={NextImage}
          src={RestorFXDark}
          alt="RestorFX Logo"
          className={cx(classes.dark)}
          height={restorHeight}
          loading="eager"
        />
      </Group>
    </Group>
  );
}
