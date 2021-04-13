// import moment from "moment";
// import marked from "marked";
export default function Blog({ innerContent }) {
  return (
    <div className=" md:grid md:grid-cols-2 lg:grid-cols-3">
      {" "}
      <div className="border-2 border-purple-400 mx-16 my-8 p-4 rounded-md transform duration-500 hover:scale-110  shadow-md">
        <div className="text-xl">
          <div className="title text-purple-300">
            {innerContent.fields.title}
          </div>

          <div className="author text-purple-600 text-xs mt-2">
            <span className="text-gray-400">By</span> Ritik N{" "}
            <span className="text-gray-400">
              {innerContent.sys.createdAt.slice(0, 10)}
            </span>
          </div>
          <p className="text-lg truncate">
           {innerContent.fields.body}
          </p>
        </div>
      </div>
    </div>
  );
}
