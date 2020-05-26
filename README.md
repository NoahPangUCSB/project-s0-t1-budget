# Budget Visualizer

- A dynamic and easy to comprehend organized data set of an individuals income and expenses history.

Team Members:

- Tomas Vera (tomasvera24) - tomasvera@ucsb.edu
- Connor McIntosh (connormcintosh) - connormcintosh@ucsb.edu
- Edward Thai (eddythai) - edwardthai@ucsb.edu
- Tristan Hernandez (tristanhernandez) - tristanhernandez@ucsb.edu
- Trung Bui (trungbui2000) - trungbui@ucsb.edu
- Preetham Kesineni (preethamkesineni) - preethamkesineni@ucsb.edu

Tech Stack: Next.js

Description:

- The user will enter their income and spending data and the application will graph their spending by category by week or month. The app could also give a score and feedback on how to save money and help the user's budget. The app would prioritize important spending in feedback (groceries vs entertainmnet). The user would have the option to look back on previous months or weeks and would show trends in the graphs. Users would create an account using google oauth and be able to view saved data.

User Roles:

- There will be one user role which is the person that enters their spending and income data.
- Admins can see anonymous data to compute averages for people who wish to see and agree to share their info.

Permission:

- Users should be able to decide if they want to send their budgeting data to other people and what types of data they want to send.

| Command                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `npm install`             | Install Dependencies                                  |
| `npm run dev`             | Runs locally in development mode                      |
| `npm run start`           | Runs in production mode (requires `PORT` env var)     |
| `npm run test`            | Runs entire test suite                                |
| `npm run test:cypress`    | Runs Cypress integration tests                        |
| `npm run test:cypress`    | Runs `prettier` format tests                          |
| `npm run fix:format`      | Reformats all project files using `prettier`          |
| `npm run storybook`       | Run React Storybook (made available at localhost:6006 |
| `npm run build-storybook` | Create static react storybook for GitHub Pages        |

- [Deployment Instructions](./docs/DEPLOY.md)
