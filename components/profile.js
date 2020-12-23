import React from "react";

export default function Profile({ id, name, photo_url, content }) {
  console.log(id);
  return (
    <div className="flex flex-col bg-white my-4 pb-6 w-full justify-center items-center overflow-hidden rounded-lg shadow-sm mx-auto">
      <div className="flex-none relative shadow mx-auto h-48 w-48 my-8 border-white rounded-full overflow-hidden border-4">
        <img className="object-cover w-full h-full" src={photo_url} />
      </div>
      <div className="flex-grow">
        <h1 className="text-lg text-center font-semibold">{name}</h1>
        <div
          className="text-sm text-gray-600 text-left p-4 md:p-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          User experience
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          VueJS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
      </div>
    </div>
  );
}
