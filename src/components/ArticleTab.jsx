const ArticleTab = ({ data }) => {
  return (
    <article className="grow">
      <header className="mb-6">
        <h2 className="text-4xl md:text-5xl font-semibold">{data.title}</h2>
        <hr className="mt-4 w-4/5" />
      </header>

      {data.image.length > 0 && (
        <div className="space-y-4">
          {data.image.map(({ id, path, description }) => {
            return (
              <div key={id} className="relative">
                <img src={path} alt={path} />
                {description !== "" && (
                  <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-60 text-white text-sm p-2">
                    {description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {data.content.length > 0 && (
        <div className="mt-6 space-y-6 text-justify">
          {data.content.map(({ contentId, title, text }) => {
            return Array.isArray(text) ? (
              <div key={contentId}>
                {title && (
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {title}
                  </h3>
                )}
                <ul className="list-disc list-inside space-y-2">
                  {text.map((list) => (
                    <li key={list.listId}>{list.listText}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div key={contentId}>
                {title && (
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {title}
                  </h3>
                )}
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default ArticleTab;
