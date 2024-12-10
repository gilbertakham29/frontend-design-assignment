import Image from "next/image";
export default function Footer() {
  return (
    <div className="p-8 lg:p-24 bg-gray-100">
      {" "}
      {/* Footer of the page - responsive*/}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          <Image
            src="/Group.webp"
            height={100}
            width={150}
            alt="company_logo"
            className="mx-auto lg:mx-0"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold">INFOS PRATIQUES</h4>
              <ul className="space-y-1">
                <li className="text-sm font-normal">A propos</li>
                <li className="text-sm font-normal">Livrasions & Reprises</li>
                <li className="text-sm font-normal">Mode d&apos;emploi</li>
                <li className="text-sm font-normal">F.A.Q</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">LEGAL</h4>
              <ul className="space-y-1">
                <li className="text-sm font-normal">Mentions légales</li>
                <li className="text-sm font-normal">CGU</li>
                <li className="text-sm font-normal">CGV</li>
                <li className="text-sm font-normal">
                  Politique de confidentialité
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">MON COMPTE</h4>
              <ul className="space-y-1">
                <li className="text-sm font-normal">Accéder à mon compte</li>
                <li className="text-sm font-normal">Ma liste d’envie</li>
                <li className="text-sm font-normal">Créer un compte</li>
                <li className="text-sm font-normal">Mot de passe oublié</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center lg:items-end gap-4">
          <div>
            <h4 className="text-sm font-bold text-center lg:text-end">
              NOUS SUIVRE
            </h4>
          </div>

          <div className="flex gap-4">
            <div className="border p-2 border-gray-300 rounded-sm">
              <Image src="/twitter.png" width={20} height={20} alt="twitter" />
            </div>
            <div className="border p-2 border-gray-300 rounded-sm">
              <Image
                src="/instagram.webp"
                width={20}
                height={30}
                alt="instagram"
              />
            </div>
            <div className="border p-2 border-gray-300 rounded-sm">
              <Image
                src="/linkedin-in.webp"
                width={20}
                height={30}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
