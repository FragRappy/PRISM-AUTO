"use client";

import { Affix, Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconDiamond } from "@tabler/icons-react";

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            radius={50}
            leftSection={<IconDiamond size={20} />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Remonter
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
