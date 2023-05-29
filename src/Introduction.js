import React from "react";
import CommentsContainer from "./CommentsContainer";

const Introduction = () => {
  return (
    <>
      <div>
        <h2 className="font-bold text-3xl">About Myself</h2>
        Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Animi possimus hic rem accusantium quis reprehenderit maiores sapiente
        quia maxime provident, eum labore. Quia in aliquam quae delectus dolorem
        laboriosam animi! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Quas iste facilis voluptas itaque debitis delectus deserunt animi
        facere iusto eveniet, ipsum saepe nobis laudantium non earum suscipit
        ipsa fugiat? Voluptas? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Velit at perspiciatis repudiandae corporis rem
        pariatur repellat rerum tenetur, quas quibusdam, voluptatibus omnis
        architecto, beatae est dicta. Nemo illo modi vitae.
      </div>
      <div>
        <CommentsContainer />
      </div>
    </>
  );
};

export default Introduction;