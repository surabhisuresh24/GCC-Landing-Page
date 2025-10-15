<feBlend>
    <title>CMA USA COURSE</title>
    <style></style>
</feBlend>

import React from "react";
import type { FormType } from "../types";

type Props = {
  onOpenModal: (type: FormType) => void;
};

const Hero: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section className="relative brand-gradient text-white overflow-hidden __web-inspector-hide-shortcut__">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <section className="absolute gradient text white overflow hidden web inspector-hide"
      