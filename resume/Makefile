# Resume & cover letter generation.
#
# Prerequisite (one-time): uv tool install "rendercv[full]"
#
# Usage:
#   make resume                 Render the main resume (Jesse_Stanger_CV.yaml -> Jesse_Stanger_Resume.pdf)
#   make job JOB=acme-se        Render a tailored resume + cover letter for resume/jobs/acme-se/
#   make clean                  Remove all generated rendercv_output/ build directories
#
# A job application lives in resume/jobs/<JOB>/ and must contain:
#   Jesse_Stanger_CV.yaml        tailored copy of the resume YAML
#   cover_letter.json            data for cover_letter_template.typ (see template for fields)

.PHONY: resume job clean

RENDERCV := uv tool run --from rendercv rendercv
COMPILE_LETTER := uv tool run --from rendercv python3 scripts/compile_cover_letter.py

resume:
	$(RENDERCV) render Jesse_Stanger_CV.yaml
	cp rendercv_output/Jesse_Stanger_CV.pdf Jesse_Stanger_Resume.pdf
	@echo "-> resume/Jesse_Stanger_Resume.pdf"

job:
ifndef JOB
	$(error Usage: make job JOB=<folder-name under resume/jobs/>)
endif
	$(RENDERCV) render jobs/$(JOB)/Jesse_Stanger_CV.yaml --output-folder rendercv_output
	cp jobs/$(JOB)/rendercv_output/Jesse_Stanger_CV.pdf jobs/$(JOB)/Jesse_Stanger_Resume.pdf
	$(COMPILE_LETTER) jobs/$(JOB)/cover_letter.json jobs/$(JOB)/Jesse_Stanger_Cover_Letter.pdf
	@echo "-> resume/jobs/$(JOB)/Jesse_Stanger_Resume.pdf"
	@echo "-> resume/jobs/$(JOB)/Jesse_Stanger_Cover_Letter.pdf"

clean:
	rm -rf rendercv_output jobs/*/rendercv_output
