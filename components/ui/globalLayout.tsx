import {ReactNode} from 'react';

function Header() {
   return <header></header>;
}

function Footer() {
   return <footer></footer>;
}

export function GlobalLayout(props: {children: ReactNode}) {
   return (
      <>
         <Header />
         {props.children}
         <Footer />
      </>
   );
}
