import mePic from '../../../public/Me.jpeg';
import Image from 'next/image';

export default function About() {
  return (
    <main className="w-full flex flex-col">
      <div className="d-photo-description flex gap-3">
        <div className="w-2/4">
          <Image
            className="aspect-auto "
            src={mePic}
            placeholder="blur"
            alt="Picture of the author"
          />
          Ioan Latrovaliev - 11.03.2023
        </div>
        <div className="w-2/4 ">
          <h2 className="text-6xl font-serif font-extrabold">
            Coding, Music, and some more...
          </h2>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            faucibus a pellentesque sit amet porttitor eget dolor. Posuere morbi
            leo urna molestie at elementum eu facilisis sed. Pretium fusce id
            velit ut tortor pretium viverra suspendisse. Eros donec ac odio
            tempor. Elementum eu facilisis sed odio morbi quis commodo odio.
            Nisi vitae suscipit tellus mauris a diam maecenas. Tempor commodo
            ullamcorper a lacus. Facilisis sed odio morbi quis commodo odio.
            Tempor orci dapibus ultrices in iaculis nunc. Amet est placerat in
            egestas erat imperdiet sed. Mauris in aliquam sem fringilla ut morbi
            tincidunt augue. Lobortis mattis aliquam faucibus purus in massa.
            Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
            Malesuada fames ac turpis egestas integer eget. Senectus et netus et
            malesuada. Cras ornare arcu dui vivamus arcu. Libero id faucibus
            nisl tincidunt. Dictum fusce ut placerat orci nulla pellentesque
            dignissim enim sit. Diam phasellus vestibulum lorem sed risus
            ultricies tristique nulla. Duis convallis convallis tellus id
            interdum velit. est lorem ipsum dolor sit amet consectetur. sagittis
            vitae et leo duis ut diam. Sed blandit libero volutpat sed cras.
            Ipsum a
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div>
          <h3 className="text-xl font-serif font-bold">Programming</h3>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            faucibus a pellentesque sit amet porttitor eget dolor. Posuere morbi
            leo urna molestie at elementum eu facilisis sed. Pretium fusce id
            velit ut tortor pretium viverra suspendisse. Eros donec ac odio
            tempor. Elementum eu facilisis sed odio morbi quis commodo odio.
            Nisi vitae suscipit tellus mauris a diam maecenas. Tempor commodo
            ullamcorper a lacus. Facilisis sed odio morbi quis commodo odio.
          </div>
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold">Music</h3>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            faucibus a pellentesque sit amet porttitor eget dolor. Posuere morbi
            leo urna molestie at elementum eu facilisis sed. Pretium fusce id
            velit ut tortor pretium viverra suspendisse. Eros donec ac odio
            tempor. Elementum eu facilisis sed odio morbi quis commodo odio.
            Nisi vitae suscipit tellus mauris a diam maecenas. Tempor commodo
            ullamcorper a lacus. Facilisis sed odio morbi quis commodo odio.
          </div>
        </div>
      </div>
    </main>
  );
}
