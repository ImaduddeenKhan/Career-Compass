
import jsPDF from 'jspdf';

interface CareerProfile {
  name: string;
  personalityType: string;
  topCareerMatches: string[];
  personalityTraits: string[];
  recommendations: {
    dos: string[];
    donts: string[];
  };
  insights: string[];
  careerFacts: string[];
}

export const generateCareerReportPDF = (profile: CareerProfile): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Professional color palette
  const primaryBlue: [number, number, number] = [29, 78, 216]; // Blue-700
  const secondaryPurple: [number, number, number] = [109, 40, 217]; // Purple-700
  const accentBlue: [number, number, number] = [59, 130, 246]; // Blue-500
  const darkGray: [number, number, number] = [31, 41, 55]; // Gray-800
  const mediumGray: [number, number, number] = [75, 85, 99]; // Gray-600
  const lightGray: [number, number, number] = [156, 163, 175]; // Gray-400

  // Header Background with gradient effect
  doc.setFillColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  // Add subtle gradient effect
  doc.setFillColor(secondaryPurple[0], secondaryPurple[1], secondaryPurple[2]);
  doc.rect(0, 35, pageWidth, 10, 'F');

  // Main Title - Bold and prominent
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("India's 1st AI Powered Career Test", pageWidth / 2, 20, { align: 'center' });

  // Subtitle
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('AI Career Analysis Report', pageWidth / 2, 32, { align: 'center' });

  // User Name
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(`Prepared for: ${profile.name}`, pageWidth / 2, 42, { align: 'center' });

  let currentY = 65;

  // Personality Type Section with enhanced styling
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('YOUR PERSONALITY TYPE', 20, currentY);
  
  // Enhanced personality type box
  doc.setFillColor(secondaryPurple[0], secondaryPurple[1], secondaryPurple[2]);
  doc.roundedRect(20, currentY + 5, pageWidth - 40, 28, 6, 6, 'F');
  
  // Add subtle border
  doc.setDrawColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setLineWidth(1);
  doc.roundedRect(20, currentY + 5, pageWidth - 40, 28, 6, 6, 'S');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(profile.personalityType, pageWidth / 2, currentY + 22, { align: 'center' });

  currentY += 50;

  // Top Career Matches with enhanced design
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('TOP CAREER MATCHES', 20, currentY);
  currentY += 12;

  profile.topCareerMatches.forEach((career, index) => {
    // Create numbered badges
    doc.setFillColor(accentBlue[0], accentBlue[1], accentBlue[2]);
    doc.circle(30, currentY + 6, 8, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}`, 30, currentY + 9, { align: 'center' });
    
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text(career, 45, currentY + 9);
    currentY += 18;
  });

  currentY += 15;

  // Key Insights with professional styling
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('KEY INSIGHTS ABOUT YOU', 20, currentY);
  currentY += 12;

  profile.insights.forEach((insight) => {
    // Add bullet points with custom styling
    doc.setFillColor(accentBlue[0], accentBlue[1], accentBlue[2]);
    doc.circle(25, currentY + 4, 2, 'F');
    
    const lines = doc.splitTextToSize(insight, pageWidth - 55);
    doc.setTextColor(mediumGray[0], mediumGray[1], mediumGray[2]);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(lines, 32, currentY + 6);
    currentY += lines.length * 6 + 8;
  });

  currentY += 10;

  // Recommendations - Do's with enhanced styling
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('✓ RECOMMENDATIONS (DO\'S)', 20, currentY);
  currentY += 10;

  profile.recommendations.dos.forEach((rec) => {
    doc.setFillColor(34, 197, 94); // Green-500
    doc.circle(25, currentY + 3, 2, 'F');
    
    const lines = doc.splitTextToSize(rec, pageWidth - 55);
    doc.setTextColor(mediumGray[0], mediumGray[1], mediumGray[2]);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(lines, 32, currentY + 5);
    currentY += lines.length * 5 + 6;
  });

  currentY += 12;

  // Recommendations - Don'ts with enhanced styling
  doc.setTextColor(220, 38, 38); // Red-600
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('✗ THINGS TO AVOID (DON\'TS)', 20, currentY);
  currentY += 10;

  profile.recommendations.donts.forEach((rec) => {
    doc.setFillColor(239, 68, 68); // Red-500
    doc.circle(25, currentY + 3, 2, 'F');
    
    const lines = doc.splitTextToSize(rec, pageWidth - 55);
    doc.setTextColor(mediumGray[0], mediumGray[1], mediumGray[2]);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(lines, 32, currentY + 5);
    currentY += lines.length * 5 + 6;
  });

  // Enhanced Footer
  doc.setFillColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.rect(0, pageHeight - 25, pageWidth, 25, 'F');
  
  // Footer content with proper spacing
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Generated by AI Career Guidance Platform', pageWidth / 2, pageHeight - 15, { align: 'center' });
  
  // Career Compass Initiative footer
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('CAREER COMPASS INITIATIVE', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save the PDF with enhanced naming
  doc.save(`${profile.name.replace(/\s+/g, '_')}_AI_Career_Report.pdf`);
};
