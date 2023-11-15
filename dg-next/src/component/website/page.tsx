import { Fragment } from "react";
import { NextPage } from "next";
import { Button } from "@nextui-org/react";
import styles from './styles.module.less'
interface NavButtonsProps {}

const NavButtons: NextPage<NavButtonsProps> = (props) => {
  const BUTTONS = [
    { name: "Home", link: "/", active: true },
    { name: "About", link: "/about", active: false },
    { name: "Play", link: "/play", active: false },
    { name: "Notes", link: "/notes", active: false },
    { name: "Contact", link: "/contact", active: false },
  ];
  return (
    <Fragment>
        <div className={'flex gap-x-10 gap container mx-auto'}>
            {BUTTONS.map((item,index) => (

                   <span className={'caret-amber-500'}>{item.name}</span>

            ))}
        </div>

    </Fragment>
  );
};
export default NavButtons;
