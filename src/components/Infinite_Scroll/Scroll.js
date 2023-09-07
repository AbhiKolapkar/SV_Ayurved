import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MutatingDots } from "react-loader-spinner";

const Scroll = ({ data, Component }) => {
  const [items, setItems] = useState([]);
  const [slice, setSlice] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setItems(
      data.slice(0, slice).map((item) => <Component key={item.id} {...item} />)
    );
  }, [data]);

  const addSlice = () => {
    setSlice(slice + 4);
    if (slice >= data.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setItems([...items, ...nextSlice()]);
      }, 1100);
    }
  };

  const nextSlice = () => {
    return data
      .slice(slice, slice + 4)
      .map((item) => <Component key={item.id} {...item} />);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={addSlice}
        hasMore={hasMore}
        loader={
          <div>
            <MutatingDots color="#ABCD33" />
          </div>
        }
        className="scroller"
      >
        {items}
      </InfiniteScroll>
    </>
  );
};

export default Scroll;
