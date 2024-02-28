/* eslint-disable react/prop-types */
export default function Card({ user }) {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    html_url,
    name,
    public_repos,
  } = user;

  const created = new Date(created_at);

  return (
    <div>
      <div>
        <img src={avatar_url} className="avatar" alt={name} />
      </div>

      <div>
        <a href={html_url} target="_blank">
          User name: {name}
        </a>
        <p>
          Join to github on: {created.getDate()}-{created.getMonth()}-
          {created.getFullYear()}
        </p>
      </div>

      <div>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public repos: {public_repos}</p>
      </div>
    </div>
  );
}
