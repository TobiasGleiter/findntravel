import ImageInfo from '@/src/components/ui/image-info';
import { Modal } from '@/src/components/ui/modal';

export default function Page({ params }) {
  const { id } = params;
  return (
    <Modal>
      <ImageInfo id={id} />;
    </Modal>
  );
}
