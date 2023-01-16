import React from "react";

type Props = {
  icon: React.ReactNode;
  onClick: () => void
};

const ActionButton = ({ icon, onClick }: Props) => {
  return <button onClick={onClick}>{icon}</button>;
};

export default ActionButton;
