import { Group, Image } from "@mantine/core";
import cx from "clsx";
import NextImage from "next/image";
import Link from "next/link";
import LogoDark from "../../../../public/logo-dark.svg";
import LogoLight from "../../../../public/logo-light.svg";
import RestorFXDark from "../../../../public/restorfx-dark.svg";
import RestorFXLight from "../../../../public/restorfx-light.svg";
import classes from "./Company.module.css";

export function LogoCompany({ prismsize, restorfxsize }) {
  return (
    <Group component={Link} href="/">
      <Group>
        <Image
          component={NextImage}
          src={LogoLight}
          alt="Prism Auto Logo"
          className={cx(classes.light)}
          height={prismsize ? prismsize : 80}
          width={prismsize ? prismsize : 80}
        />
        <Image
          component={NextImage}
          src={LogoDark}
          alt="Prism Auto Logo"
          className={cx(classes.dark)}
          height={prismsize ? prismsize : 80}
          width={prismsize ? prismsize : 80}
        />
      </Group>
      <div className={classes.divider} />
      <Group>
        <Image
          component={NextImage}
          src={RestorFXLight}
          alt="RestorFX Logo"
          className={cx(classes.light)}
          height={restorfxsize ? restorfxsize : 12}
        />
        <Image
          component={NextImage}
          src={RestorFXDark}
          alt="RestorFX Logo"
          className={cx(classes.dark)}
          height={restorfxsize ? restorfxsize : 12}
        />
      </Group>
    </Group>
  );
}
