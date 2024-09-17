import React from 'react'
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container>
      <Footer.Copyright href="/" by="Roomies" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
