import GoogleMapComponent from '../components/GoogleMapComponent';
import { auth } from "@/auth"

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <GoogleMapComponent session={session} />
    </div>
  );
}