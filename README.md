# collastudio

# View logs to see hot reload in action
docker compose logs -f

# Restart a specific service if needed (rare)
docker compose restart nestjs
docker compose restart web

# Stop everything
docker compose down

# Start again (fast, no rebuild needed)
docker compose up 