import { useRouter } from "next/router";

export default function SlugRoute() {
  const { query } = useRouter();
  const [bookId , category, releaseYear] = query?.slug ?? [];

  return (
    <table>
      <h1>Slug Route</h1>
      <tbody>
        <tr>
          <th>Book Id</th>
          <td>{bookId}</td>
        </tr>
        <tr>
          <th>Category</th>
          <td>{category}</td>
        </tr>
        <tr>
          <th>Release Year</th>
          <td>{releaseYear}</td>
        </tr>
      </tbody>
    </table>
  );
}
