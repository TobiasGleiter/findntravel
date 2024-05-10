import ImageInfo from '@/src/components/ui/image-info';
import { Modal } from '@/src/components/ui/modal';

export default async function Page() {
  const id = 'ahokwwx2aymg7hvoij8y';
  return (
    <Modal>
      <ImageInfo id={id} />;
    </Modal>
  );
}
