"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function DashboardPage() {
  return (
    <>
      <div id="dashboard-wrapper" style={{  minHeight: "90vh", alignItems: "center", justifyContent: "center", display: "flex" }}>
        <Container fluid className="py-5">
          <Row className="mb-4">
            <Col>
              <h1 className="text-center fw-bold" style={{ color: "#6844ed" }}>
                Welcome to genifyl dashboard
              </h1>
              <p className="text-center text-muted">
                Manage and explore tools like Cartoonify with ease.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {/* Cartoonify Tool Section */}
            <Col md={6} lg={4}>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body className="text-center">
                  <div style={{ fontSize: "3rem", color: "#6844ed", marginBottom: "1rem" }}>
                    🖌️
                  </div>
                  <Card.Title className="fw-bold">Cartoonify</Card.Title>
                  <Card.Text>
                    Transform your photos into vibrant cartoons with AI-powered magic.
                  </Card.Text>
                  <Button variant="primary" href="/dashboard/genifyl" className="w-100">
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Tool 2 Placeholder */}
            <Col md={6} lg={4}>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body className="text-center">
                  <div style={{ fontSize: "3rem", color: "#FF8C42", marginBottom: "1rem" }}>
                    🚀
                  </div>
                  <Card.Title className="fw-bold">Coming Soon</Card.Title>
                  <Card.Text>
                    Stay tuned for more exciting tools to boost your creativity!
                  </Card.Text>
                  <Button variant="secondary" className="w-100" disabled>
                    Coming Soon
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Tool 3 Placeholder */}
            <Col md={6} lg={4}>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body className="text-center">
                  <div style={{ fontSize: "3rem", color: "#FF5E5E", marginBottom: "1rem" }}>
                    🎨
                  </div>
                  <Card.Title className="fw-bold">Tool 3</Card.Title>
                  <Card.Text>
                    Unlock your creativity with another amazing tool.
                  </Card.Text>
                  <Button variant="secondary" className="w-100" disabled>
                    Coming Soon
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}
