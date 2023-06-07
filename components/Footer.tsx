export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-gray-600 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-8 px-8 sm:gap-y-16 sm:px-16 sm:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>It&apos;s a pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Papafam</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Papa React</p>
          <p>Presents</p>
          <p>Zero to Full Stack Hero</p>
          <p>Hundreds of Students</p>
          <p>Join Now</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Say Hi YouTube</p>
          <p>Easter Eggs</p>
          <p>For the Win</p>
        </div>
      </div>
    </footer>
  );
}
