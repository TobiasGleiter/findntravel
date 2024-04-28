import Divider from '../../ui/divider';
import FooterLegal from './footer.legal';

export default function Footer() {
  return (
    <div className="bg-muted-foreground/5 p-8">
      <div className="flex flex-col gap-8">
        {/* <div className="flex justify-center text-sm">
          <h2 className="antialised font-semibold">Über uns</h2>
        </div> */}
        <Divider />
        <FooterLegal />
      </div>
    </div>
  );
}
