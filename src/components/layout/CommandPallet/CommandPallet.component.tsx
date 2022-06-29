import { FC, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { CommandPalletContext } from "../../../context/CommandPallet.context";

export const CommandPallet: FC = () => {
  const { isOpen, setIsOpen } = useContext(CommandPalletContext);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 p-4 pt-[25vh]"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/10 blur-xl" />
      <div className="relative mx-auto max-w-xl rounded-xl bg-white shadow-2xl">
        <p className="p-3">Hello</p>
      </div>
    </Dialog>
  );
};
