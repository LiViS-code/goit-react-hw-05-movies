import { LinkTo } from "../../App.styled";

export default function NotfoundPage(params) {
  return (
    <div>
      This page doesn't exist. Go <LinkTo to="/">Home</LinkTo>
    </div>
  );
}
