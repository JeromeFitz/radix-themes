import * as React from 'react';
import classNames from 'classnames';
import { Text } from './text';
import { linkPropDefs } from './link.props';

import type { PropsWithoutRefOrColor, MarginProps, GetPropDefTypes } from '../helpers';

type LinkElement = React.ElementRef<'a'>;
type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>;
interface LinkProps extends PropsWithoutRefOrColor<'a'>, MarginProps, LinkOwnProps {
  asChild?: boolean;
}
const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { children, className, asChild = false, ...linkProps } = props;
  return (
    <Text
      {...linkProps}
      ref={forwardedRef}
      asChild
      className={classNames(className, 'rui-reset-a', 'rui-reset-button', 'rui-Link')}
    >
      {asChild ? children : <a>{children}</a>}
    </Text>
  );
});
Link.displayName = 'Link';

export { Link };
