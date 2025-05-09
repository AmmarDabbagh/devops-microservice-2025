# DevOps Microservice 2025

Access the deployed project here:

https://devops-microservice-2025.onrender.com

## 🚀 Project Overview

**DevOps Microservice 2025** is a cloud-native, containerized microservices application designed to demonstrate modern DevOps practices. The project emphasizes scalability, observability, and security, incorporating principles such as CI/CD automation, container orchestration, and DevSecOps.

## 👥 Team Members

* **Ammar Dabbagh** – Lead Developer
* **Mohammed Kadura** – Backend Engineer
* **Ahmed Radwan** – DevOps Engineer

## 🧱 Architecture

The application follows a microservices architecture, with each service encapsulating a specific business capability. Key components include:

* **API Gateway**: Routes incoming requests to appropriate services.
* **Authentication Service**: Manages user authentication and authorization.
* **User Service**: Handles user-related operations.
* **Product Service**: Manages product information.
* **Order Service**: Processes customer orders.
* **Database**: Each service has its own database to ensure loose coupling.

![microservices-diagram](https://github.com/user-attachments/assets/4ea95ad2-d79d-4d73-8a86-a399ab178154)


*Note: Replace the above image link with your actual architecture diagram if available.*

## 🛠️ Technologies Used

* **Programming Language**: JavaScript (Node.js)
* **Containerization**: Docker
* **Orchestration**: Docker Compose
* **CI/CD**: GitHub Actions
* **Monitoring**: Prometheus & Grafana
* **Security**: JWT, OAuth 2.0
* **Testing**: Jest

## ⚙️ Getting Started

### Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AmmarDabbagh/devops-microservice-2025.git
   cd devops-microservice-2025
   ```

2. **Start the application:**

   ```bash
   docker-compose up --build
   ```

   This command builds and starts all services defined in the `docker-compose.yml` file.

3. **Access the application:**

   * API Gateway: [http://localhost:8080](http://localhost:8080)
   * Grafana Dashboard: [http://localhost:3000](http://localhost:3000)
   * Prometheus: [http://localhost:9090](http://localhost:9090)

*Note: Ports may vary based on your `docker-compose.yml` configuration.*

## 🧪 Running Tests

Each service includes its own test suite. To run tests:

```bash
docker exec -it <service_name> npm test
```

Replace `<service_name>` with the name of the service container you wish to test.

## 🔒 Security

Security is integrated throughout the development lifecycle:

* **Authentication & Authorization**: Implemented using JWT and OAuth 2.0.
* **Secure Communication**: All inter-service communication is secured via HTTPS.
* **Static Code Analysis**: Automated scans using tools like ESLint.
* **Dependency Management**: Regular updates and vulnerability checks.

## 📈 Monitoring & Logging

* **Prometheus**: Collects metrics from services.
* **Grafana**: Visualizes metrics and system health.
* **ELK Stack**: Centralized logging for all services.

## 📄 API Documentation

Comprehensive API documentation is available via Swagger UI:

* [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

*Note: Ensure the Swagger UI is correctly set up in your API Gateway.*

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and passes all tests.

## 📜 License

This project is licensed under the [MIT License](LICENSE).
