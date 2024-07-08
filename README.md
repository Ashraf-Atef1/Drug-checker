# Egypt Drug Checker App

## Introduction
The Egypt Drug Checker app is the first application in Egypt designed to check drug interactions using the trade-names of medications commonly used in the country. Inspired by the need for a reliable tool to ensure safe medication use, our app aims to enhance healthcare safety by preventing adverse drug reactions and improving patient outcomes.

- **Deployed Site:** [Egypt Drug Checker App](https://www.ashrafatef.tech/)
- **Final Project Blog Article:** [Read our Journey](https://www.linkedin.com/pulse/egypt-drug-checker-app-ashraf-atef-x2uff)
- **Authors LinkedIn:** 
  - [Ashraf Atef](https://www.linkedin.com/in/ashraf-atef/)
  - [Khaled Mansour](https://www.linkedin.com/in/khaled-mansour-22a914184/)

## Installation
To run the Egypt Drug Checker app locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ashraf-Atef1/Drug-checker.git
    cd egypt-drug-checker-app
    ```

2. **Install client dependencies:**
    ```bash
    cd client
    npm install
    ```

3. **Install server dependencies:**
    ```bash
    cd ../server
    npm install
    ```

4. **Set up the environment variables:**
    Create a `.env` file in the `server` directory with the following variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    PORT=your_port_number
    ```

5. **Run the app:**
    ```bash
    npm run deploy
    ```

## Usage
1. **Open your browser** and navigate to `http://localhost:your_port_number`.
2. **Upload a drug image** to search for its trade-name.
3. **Check interactions** between multiple drugs by entering their trade-names.

## Contributing
We welcome contributions from the community. If you would like to contribute to the project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Make your changes** and **commit them** (`git commit -m 'Add new feature'`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Create a Pull Request**.


## Related Projects
- [OpenFDA](https://open.fda.gov/)
- [Drugs.com Interaction Checker](https://www.drugs.com/drug_interactions.html)

## Licensing
This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

