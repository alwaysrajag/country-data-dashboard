/**
 * @author Raja Ganesan
 * @email alwaysrajag@gmail.com
 * @create date 09-10-2024 08:17
 * @modify date 09-10-2024 08:17
 * @desc [description]
 */
"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Unable to fetch countries, Please check the filters or try again</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
