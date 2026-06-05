# Load Balancer Demo

A comprehensive multi-technology load balancing demonstration with three separate backend services built with different tech stacks.

## Architecture

This project demonstrates a load balancer setup with:

- **Nginx** - Load balancer (reverse proxy)
- **Node.js** - Express server on port 3001
- **Python** - Flask server on port 3002
- **Spring Boot** - Java server on port 3003

The Nginx load balancer uses round-robin distribution to balance traffic across all three backend servers.

## Project Structure

```
load-balancer-demo/
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
├── node-server/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── python-server/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app.py
├── springboot-server/
│   ├── Dockerfile
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/example/
│           │       ├── Application.java
│           │       └── controller/
│           │           └── HelloController.java
│           └── resources/
│               └── application.properties
└── docker-compose.yml
```

## Services

### Node.js Server
- **Port**: 3001
- **Endpoints**:
  - `GET /` - Returns hello message with server info
  - `GET /health` - Health check endpoint

### Python Flask Server
- **Port**: 3002
- **Endpoints**:
  - `GET /` - Returns hello message with server info
  - `GET /health` - Health check endpoint

### Spring Boot Server
- **Port**: 3003
- **Endpoints**:
  - `GET /` - Returns hello message with server info
  - `GET /health` - Health check endpoint

### Nginx Load Balancer
- **Port**: 80
- **Upstream Configuration**: Round-robin distribution across all three backends

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
```bash
git clone https://github.com/mohanvenkat1/load-balancer-demo.git
cd load-balancer-demo
```

2. Build and start all services:
```bash
docker-compose up --build
```

3. Test the load balancer:
```bash
# Make requests to the load balancer on port 80
curl http://localhost/

# You should see responses alternating between the three servers:
# Node.js, Python Flask, and Spring Boot
```

### Testing Load Balancing

Make multiple requests and observe the round-robin distribution:

```bash
# Terminal 1 - Watch the responses
for i in {1..9}; do curl http://localhost/ && sleep 1; done

# Or use watch command
watch -n 1 'curl http://localhost/'
```

Each request will be routed to the next backend server in sequence:
1. Node.js Server (message: "Hello from Node.js Server!")
2. Python Flask Server (message: "Hello from Python Server!")
3. Spring Boot Server (message: "Hello from Spring Boot Server!")

### Health Checks

Test the health endpoints:
```bash
curl http://localhost/health
```

## Docker Services

All services are containerized and connected via a custom Docker bridge network.

### Building Individual Services

```bash
# Build Node.js server
docker build -t node-server ./node-server

# Build Python server
docker build -t python-server ./python-server

# Build Spring Boot server
docker build -t springboot-server ./springboot-server

# Build Nginx load balancer
docker build -t nginx-lb ./nginx
```

### Running Individual Services

After building, you can run services individually with:

```bash
docker run -p 3001:3001 node-server
docker run -p 3002:3002 python-server
docker run -p 3003:3003 springboot-server
docker run -p 80:80 nginx-lb
```

## Stopping the Application

```bash
docker-compose down
```

To remove all containers and volumes:
```bash
docker-compose down -v
```

## API Response Format

All endpoints return JSON in the following format:

```json
{
  "message": "Hello from [Server Type] Server!",
  "timestamp": "2026-06-05T10:20:00.000000",
  "server": "server-name",
  "status": "running"
}
```

## Nginx Configuration

The Nginx configuration uses upstream balancing with round-robin distribution:

```nginx
upstream backend {
    server node-server:3001;
    server python-server:3002;
    server springboot-server:3003;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Features

✅ Multi-technology backend services (Node.js, Python, Java)
✅ Nginx reverse proxy with load balancing
✅ Docker containerization for all services
✅ Docker Compose orchestration
✅ Round-robin load distribution
✅ Health check endpoints
✅ Proper isolation with custom bridge network
✅ Request routing with proper headers preservation

## Use Cases

This project demonstrates:
- Load balancing with Nginx
- Multi-service architecture
- Docker and Docker Compose usage
- Round-robin load distribution
- Reverse proxy configuration
- Cross-service communication in Docker networks

## License

MIT License

## Author

mohanvenkat1

---

For more information, visit: https://github.com/mohanvenkat1/load-balancer-demo