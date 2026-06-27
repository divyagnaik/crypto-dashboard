type ErrorProps = {
    message?: string;
  };
  
  export default function Error({
    message = "Something went wrong.",
  }: ErrorProps) {
    return (
      <div className="rounded-md bg-red-100 p-4 text-red-700">
        {message}
      </div>
    );
  }