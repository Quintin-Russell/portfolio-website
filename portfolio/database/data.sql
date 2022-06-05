INSERT INTO "contact" (
	"contactName",
	"email",
	"phoneNumber",
	"message"
) VALUES (
  'QR',
  'quinn.j.russell@gmail.com',
  '7604156677',
  'An application where users can input purchases, set budgets, and view various summary statistics to analyze their spending.'
);

INSERT INTO "projects" (
	"name",
	"imgUrl",
	"tech",
	"description",
	"summary",
	"githubLink",
	"liveLink"
) VALUES (
  'QuickTrack',
  'https://github.com/Quintin-Russell/quick-track/blob/master/QuickTrackdemo.gif?raw=true',
  '["JavaScript", "ReactJS", "NodeJS", "PostgreSQL"]',
  'A full-stack application for people that want to build positive financial habits by tracking their expenses.',
  'An application where users can input purchases, set budgets, and view various summary statistics to analyze their spending.',
  'https://github.com/Quintin-Russell/quick-track',
  'https://quick-track-app.herokuapp.com/'
);

INSERT INTO "projects" (
	"name",
	"imgUrl",
	"tech",
	"description",
	"summary",
	"githubLink",
	"liveLink"
) VALUES (
  'MoodTrace',
  'https://github.com/Quintin-Russell/mood-trace/blob/master/MoodTracedemo.gif?raw=true',
  '["JavaScript", "jQuery"]',
  'A front-end web application for people that want to prioritize their mental health by journaling and tracking their general mental state over time.',
  'A digital journal that analyzes journal entries using sentiment analysis software, producing a Mood score. Mood scores are graphed throughout time so the user can get an overall sense of their feelings over time',
  'https://github.com/Quintin-Russell/mood-trace',
  'https://quintin-russell.github.io/mood-trace/'
);
