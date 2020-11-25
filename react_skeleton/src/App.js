import { useEffect, useState } from "react";
import {
  Card,
  CardImage,
  Picture,
  CardTitle,
  CardDescription,
} from "./_appStyle";
import starFruit from "./star-fruit-cover-1.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (!loading) {
      setData({
        title: "Star Fruit",
        description: "A great fruit to eat",
      });
    }
  }, [loading]);

  return (
    <Card>
      <CardImage loading={loading}>
        {!loading && <Picture src={starFruit} />}
      </CardImage>
      <CardTitle loading={loading}>{data.title}</CardTitle>
      <CardDescription loading={loading}>{data.description}</CardDescription>
    </Card>
  );
}

export default App;
