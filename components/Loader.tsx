import { Spinner } from "./Spinner";

export const Loader = () => (
  <span className="flex items-center gap-2">
    <Spinner />
    <p>Submitting...</p>
  </span>
);
