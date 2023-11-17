import React, { FC } from "react";

import { ReactComponent as IconEmail } from "../../assets/icons/email.svg";
import { ReactComponent as IconEnter } from "../../assets/icons/enter.svg";
import { ReactComponent as IconLock } from "../../assets/icons/lock.svg";
import { ReactComponent as IconUser } from "../../assets/icons/user.svg";

interface IconMap {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ICON_MAP: IconMap = {
  email: IconEmail,
  enter: IconEnter,
  lock: IconLock,
  user: IconUser,
};

interface Props {
  iconName: string;
  className?: string;
}

const Icon: FC<Props> = ({ iconName, className }) => {
  const Component = ICON_MAP[iconName];

  return Component ? <Component className={className} /> : null;
};

export default Icon;
