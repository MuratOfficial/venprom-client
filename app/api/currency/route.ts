export async function GET() {
  const res = await fetch(
    "http://api.exchangeratesapi.io/v1/latest?access_key=9a897dabac954accb13cc2be5a40f411&symbols=RUB,KZT",
    { next: { revalidate: 24 * 60 * 60 * 1000 } }
  );
  const data = await res.json();

  return Response.json({ data });
}
